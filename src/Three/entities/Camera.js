class Camera {
    constructor(position, rotation) {
        this.position = position
        this.rotation = rotation
        document.addEventListener("mousedown", e => this.move(e), true)
    }

    move(player) {
        
    }

    setMouse(e) {
        this.mouse = e
        console.log(this.mouse.clientX)
    }
   
}

export default Camera