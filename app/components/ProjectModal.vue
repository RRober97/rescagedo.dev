<template>
  <transition name="fade">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="close" role="dialog" aria-modal="true" :aria-labelledby="`modal-${project?.slug}-title`">
      <div ref="dialog" class="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full p-6 outline-none" @keydown.esc.prevent="close">
        <header class="flex justify-between items-start gap-4">
          <div>
            <h3 :id="`modal-${project?.slug}-title`" class="text-xl font-semibold">{{ project?.title }}</h3>
            <p class="text-sm text-slate-500">{{ project?.year }} — {{ project?.short }}</p>
          </div>
          <button @click="close" aria-label="Cerrar modal">✕</button>
        </header>

        <section class="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <img v-if="project?.cover" :src="project.cover" :alt="project.title + ' cover'" class="rounded-lg w-full h-48 object-cover mb-3" />
            <div class="flex gap-2 flex-wrap">
              <TechBadge v-for="(t,i) in project?.stack || []" :key="i" :label="t" />
            </div>
          </div>
          <div>
            <h4 class="font-semibold">Problema</h4>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ project?.problem }}</p>
            <h4 class="mt-3 font-semibold">Solución</h4>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ project?.solution }}</p>
            <h4 class="mt-3 font-semibold">Impacto</h4>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ project?.impact }}</p>
            <div class="mt-4 flex gap-2">
              <a v-for="(l,i) in project?.links || []" :key="i" :href="l.url || '#TODO'" class="text-sm underline" target="_blank" rel="noreferrer">{{ l.label }}</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import TechBadge from './TechBadge.vue'

const props = defineProps({ modelValue: Boolean, project: Object })
const emit = defineEmits(['update:modelValue'])
const dialog = ref(null)

function close(){ emit('update:modelValue', false) }

watch(()=>props.modelValue, async (v)=>{
  if(v){ await nextTick(); trapFocus()
  } else { releaseFocus() }
})

let lastActive = null
function trapFocus(){
  lastActive = document.activeElement
  const focusable = dialog.value.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])')
  if(focusable.length) focusable[0].focus()
  document.addEventListener('focus', keepFocus, true)
}
function keepFocus(e){ if(dialog.value && !dialog.value.contains(e.target)) { e.stopPropagation(); dialog.value.focus() } }
function releaseFocus(){ document.removeEventListener('focus', keepFocus, true); if(lastActive) lastActive.focus() }

onMounted(()=>{
  // close on esc globally as a fallback
  window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && props.modelValue) close() })
})
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{ transition: opacity .18s }
.fade-enter-from,.fade-leave-to{ opacity:0 }
</style>
