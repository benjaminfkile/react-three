import { Canvas } from "@react-three/fiber"
import { Component } from "react"
import Scene from "./Three/PhysicsPlayground"
import mutator from "./utils/mutator"

interface AppProps {

}

interface AppState {
  perspectiveCameraRotation: number[]
  perspectiveCameraPosition: number[]
  position: number[]
}
class App extends Component<AppProps, AppState> {


  componentDidMount(): void {
    document.addEventListener("mousemove", this.handleMousemove)
    // document.addEventListener("wheel", this.handleMouseWheel)
  }

  manageState = (keys: Array<{ key: string, value?: any }>) => {
    this.setState(mutator(this.state, keys))
  }

  handleMousemove = (e: { clientX: number, clientY: number }) => {
    // const position = { x: -407.54, y: 597.06, z: 1083.23 },
    // const rotation = { x: .5, y: .5, z: 0 }
    // console.log(camera)
    // camera.setRotation(rotation)
  }

  // handleMouseWheel = (event: any) => {
  //   let position = camera.getPosition()
  //   if (event.deltaY < 0) {
  //     position.y -= 20
  //   }
  //   if (event.deltaY > 0) {
  //     position.z += 20
  //   }

  //   camera.setPosition(position)
  //   console.log(camera.getPosition())
  // }

  move = (key: { code: string }) => {
    console.log()
  }

  render() {


    return (
      <div>
        <Canvas style={{ width: "100vw", height: "calc(100vh - 50px)" }} frameloop="always">
          <Scene />
        </Canvas>
        <button onClick={() => this.manageState([{ key: "perspectiveCameraRotation", value: [-0.51, 0.01, 0] }])} >Move</button>
      </div>
    )
  }
}

export default App