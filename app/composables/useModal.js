import { ref } from 'vue'

export function useModal() {
  const open = ref(false)
  const payload = ref(null)
  const show = (data) => { payload.value = data; open.value = true }
  const hide = () => { open.value = false; payload.value = null }
  return { open, payload, show, hide }
}
