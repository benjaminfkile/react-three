class Player {
    constructor(position, rotation, camera) {
        this.position = position
        this.rotation = rotation
        this.camera = camera
        this.distanceFromPlayer = -50
        this.angleAroundPlayer = 0
        this.pitch = 50
        this.roll = 0
        this.yaw = 0
        this.angleChange = 0
        this.keysPressed = []
        document.addEventListener("keydown", e => this.handleKeyDown(e), false)
        document.addEventListener("keyup", e => this.handleKeyUp(e), false)
    }

    handleKeyDown = (e) => {
        let keys = this.keysPressed
        if (keys.indexOf(e.code) < 0) {
            keys.push(e.code)
        }
        this.move()
    }

    handleKeyUp = (e) => {
        let keys = this.keysPressed
        const index = keys.indexOf(e.code)
        if (index > -1) {
            keys.splice(index, 1)
        }
    }

    move = () => {

        console.log(this.camera)
        const keys = this.keysPressed
        console.log(keys)
        if (keys.indexOf("KeyW") > -1) {
            this.position.z -= 5
            // this.camera.position.z -= 5
        }

        if (keys.indexOf("KeyS") > -1) {
            this.position.z += 5
            // this.camera.position.z += 5
        }

        if (keys.indexOf("KeyA") > -1) {
            this.rotation.y -= 5
            this.position.x -= 5

            this.camera.rotation.y += Math.cos(5)
            this.camera.position.x -= 5 
        }

        if (keys.indexOf("KeyD") > -1) {
            // this.camera.rotation.y += 5
            this.rotation.y -= Math.sin(5)
            this.position.x += 5

            this.camera.rotation.y -= Math.cos(5)
            this.camera.position.x += 5 
        }



        console.log("player", this.position)
        console.log("camera", this.camera.position)

        // if (keys.indexOf("ArrowRight") > -1) {
        //     this.camera.rotation.y += 20
        // }


        // this.calculateCameraPosition()
    }

    calculateCameraPosition = () => {
        // const theta = this.getRotY() + this.angleAroundPlayer
        // const horizDistance = this.calculateHorizontalDistance()
        // const vertDistance = this.calculateVerticalDistance()
        // const offsetX = horizDistance * Math.sin(theta)
        // const offsetZ = horizDistance * Math.cos(theta)
        // this.camera.position.x = this.position.x - offsetX
        // this.camera.position.y = this.position.y + vertDistance
        // this.camera.position.z = this.position.z - offsetZ

        // this.position.x = this.camera.position.x
        // this.position.y = this.camera.position.y
        // this.position.z = this.camera.position.z
    }

    calculateHorizontalDistance = () => {
        return this.distanceFromPlayer * Math.cos(this.pitch)
    }

    calculateVerticalDistance = () => {
        return this.distanceFromPlayer * Math.sin(this.pitch)
    }

    getRotY = () => {
        return this.rotation.y
    }

    getRotX = () => {
        return this.rotation.X
    }

    getRotZ = () => {
        return this.rotation.z
    }
}

export default Player