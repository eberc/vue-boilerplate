export default {
  name: 'WindowSize',
  data() {
    return {
      windowSize: this.getWindowSize(),
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      this.windowSize = this.getWindowSize()
      console.log('tamanho atual da tela', this.windowSize)
    },
    getWindowSize() {
      const newSize = {
        width: Math.min(window.innerWidth, document.documentElement.clientWidth),
        height: Math.min(window.innerHeight, document.documentElement.clientHeight),
      }

      return newSize
    },
  },
}
