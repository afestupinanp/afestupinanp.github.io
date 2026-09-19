import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

export function useTypingAnimation(nameText: () => string, jobText: () => string) {
    const fullName = computed(nameText)
    const jobTitle = computed(jobText)
    const typedName = ref('')
    const typedJob = ref('')
    const isTypingDone = ref(false)
    const isJobTypingDone = ref(false)

    let typeTimer: ReturnType<typeof setTimeout> | null = null
    let jobTimer: ReturnType<typeof setTimeout> | null = null

    const startTypingAnimation = () => {
        if (typeTimer) clearTimeout(typeTimer)
        if (jobTimer) clearTimeout(jobTimer)
        const text = fullName.value
        const jobTextVal = jobTitle.value
        let index = 0
        let jobIndex = 0
        typedName.value = ''
        typedJob.value = ''
        isTypingDone.value = false
        isJobTypingDone.value = false

        const typeNextChar = () => {
            if (index < text.length) {
                typedName.value += text[index]
                index++
                typeTimer = setTimeout(typeNextChar, 60)
            } else {
                isTypingDone.value = true
            }
        }

        // Start job title typing with 100ms delay from the start
        jobTimer = setTimeout(() => {
            const typeJobChar = () => {
                if (jobIndex < jobTextVal.length) {
                    typedJob.value += jobTextVal[jobIndex]
                    jobIndex++
                    jobTimer = setTimeout(typeJobChar, 60)
                } else {
                    isJobTypingDone.value = true
                }
            }
            typeJobChar()
        }, 100)

        typeNextChar()
    }

    onMounted(() => {
        startTypingAnimation()
    })

    watch(fullName, () => {
        startTypingAnimation()
    })

    onUnmounted(() => {
        if (typeTimer) clearTimeout(typeTimer)
        if (jobTimer) clearTimeout(jobTimer)
    })

    return {
        typedName,
        typedJob,
        isTypingDone,
        isJobTypingDone,
        fullName,
        jobTitle,
    }
}