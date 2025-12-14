<script setup>
import { ref, computed } from 'vue'
import Dialog from '@/components/app/ui/dialog.vue'
import { db, auth } from "@/assets/index.js"
import { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy, serverTimestamp } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

const tasks = ref([])
const newTask = ref("")
const newDescription = ref("")
const editingTaskId = ref(null)
const editingTitle = ref("")
const editingDescription = ref("")

const tasksRef = collection(db, "tasks")

onAuthStateChanged(auth, (user) => {
  if (!user) return
  const q = query(
    tasksRef,
    where("userId", "==", user.uid)
  )
  onSnapshot(q, (snapshot) => {
    console.log("Docs count:", snapshot.size)
    tasks.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
})

async function addTask() {
  if (!newTask.value.trim()) return
  const user = auth.currentUser
  if (!user) return console.error("User not logged in!")

  try {
    await addDoc(tasksRef, {
      title: newTask.value,
      description: newDescription.value,
      completed: false,
      userId: user.uid,
      createdAt: new Date()
    })
    newTask.value = ""
    newDescription.value = ""
    emit('update:show-dialog', false)
  } catch (error) {
    console.error("Error adding task:", error)
  }
}

const props = defineProps({
  showDialog: { type: Boolean, required: true }
})

const emit = defineEmits(['update:show-dialog'])

const closeDialog = () => emit('update:show-dialog', false)

const dialogModel = computed({
  get: () => props.showDialog,
  set: (val) => emit('update:show-dialog', val)
})

function startEdit(task) {
  editingTaskId.value = task.id
  editingTitle.value = task.title
  editingDescription.value = task.description || ""
}

async function updateTask(taskId) {
  if (!editingTitle.value.trim()) return
  try {
    await updateDoc(doc(db, "tasks", taskId), {
      title: editingTitle.value,
      description: editingDescription.value
    })
    editingTaskId.value = null
    editingTitle.value = ""
    editingDescription.value = ""
  } catch (err) {
    console.error("Failed to update task:", err)
  }
}

async function removeTask(taskId) {
  try {
    await deleteDoc(doc(db, "tasks", taskId))
  } catch (err) {
    console.error("Failed to delete task:", err)
  }
}

</script>

<template>
  <section class="tasks">
    <!-- Dialog -->
    <Dialog v-model="dialogModel" class="dialog">
      <template #title>
        <h2 class="dialog-title">Create Task</h2>
      </template>

      <template #content>
        <input v-model="newTask" placeholder="Task title" class="task-input" />
        <textarea v-model="newDescription" placeholder="Task description (optional)" class="task-textarea" />
      </template>

      <template #actions>
        <button @click="addTask" class="btn btn-primary">Add</button>
        <button @click="closeDialog" class="btn btn-secondary">Cancel</button>
      </template>
    </Dialog>

    <!-- Task list -->
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" :class="{ done: task.completed }" class="task-item">
        <input type="checkbox" :checked="task.completed"
          @change="updateDoc(doc(db, 'tasks', task.id), { completed: !task.completed })" />

        <div class="task-body" v-if="editingTaskId !== task.id">
          <strong>{{ task.title }}</strong>
          <p v-if="task.description">{{ task.description }}</p>
        </div>

        <div class="task-edit" v-else>
          <input v-model="editingTitle" class="task-input" />
          <textarea v-model="editingDescription" class="task-textarea"></textarea>
          <button class="btn btn-primary" @click="updateTask(task.id)">Save</button>
        </div>

        <div class="actions">
          <button class="btn btn-ghost" @click="startEdit(task)">Edit</button>
          <button class="btn btn-danger" @click="removeTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
  </section>
</template>


<style scoped>
/* Layout */
.tasks {
  padding: 2rem 1rem;
  margin: 0 100px;
}

/* Dialog */
.dialog-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

/* Inputs */
.task-input,
.task-textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  margin-bottom: 0.75rem;
  font: inherit;
  color: inherit;
  background: transparent;
}

.task-textarea {
  resize: vertical;
  min-height: 80px;
}

/* Buttons */
.btn {
  padding: 0.45rem 0.9rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font: inherit;
}

.btn-primary {
  background: rgb(20, 94, 52);
  color: white;
}

.btn-primary:hover {
  background: white;
  color: rgb(20, 94, 52);
}

.btn-secondary {
  background: #e5e7eb;
  color: #111827;
}

.btn-secondary:hover {
  background: #d1d5db;
}

.btn-danger {
  background: #dc2626;
  color: white;
}

.btn-danger:hover {
  background: #b91c1c;
}

.btn-ghost {
  background: transparent;
  color: inherit;
  opacity: 0.8;
}

.btn-ghost:hover {
  opacity: 1;
}

/* Task List */
.task-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
}

.task-item {
  display: flex;
  gap: 1rem;
  width: 400px;
  align-items: flex-start;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.task-item.done {
  opacity: 0.65;
  text-decoration: line-through;
}

.task-body p {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  width: 200px;
}

.task-edit {
  flex: 1;
}

/* Actions */
.actions {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

/* Checkbox */
input[type="checkbox"] {
  margin-top: 0.25rem;
}

/* Mobile */
@media (max-width: 640px) {
  .tasks {
    margin: 0;
  }
}
</style>
