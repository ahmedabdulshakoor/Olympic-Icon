import React from 'react'
import ReactDOM from 'react-dom'
import { Pane, TextInputField, TextInput } from 'evergreen-ui'
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            radius: 100,
            Lwid: 15
        }
        this.canvas = React.createRef()

    }

    componentDidMount() {
        this.drawOlympicIcon(this.state.radius, this.state.Lwid)
    }

    componentDidUpdate() {
        this.canvas.current.getContext('2d').clearRect(0, 0, 1000, 600)
        this.drawOlympicIcon(this.state.radius, this.state.Lwid)
    }






    drawOlympicIcon(radiusOrg, Lwid) {
        let ctx = this.canvas.current.getContext("2d");

        function DrawArc(ctx, x, y, radius, startAng, endAng, strokeStyle) {

            ctx.save()
            ctx.beginPath()
            ctx.strokeStyle = strokeStyle
            ctx.lineWidth = Lwid
            ctx.arc(x, y, radius, startAng, endAng, false)
            ctx.moveTo(65, 65);
            ctx.closePath()
            ctx.stroke()
            ctx.restore()
        }



        let radius = radiusOrg;
        let x = parseInt(radius) + 100;
        let y = parseInt(radius) + 100;
        let ofsetX = radius * 2.25; let ofsetX2 = ofsetX / 2;
        let ofsetY = radius * 1; let ofsetY2 = ofsetY / 2;


        // Blue
        DrawArc(ctx, x, y, radius, 0.25 * Math.PI, 1 * Math.PI, '#00f')

        // Black
        x += ofsetX
        DrawArc(ctx, x, y, radius, 0.75 * Math.PI, 0.25 * Math.PI, '#000')


        // Yallow 
        x -= ofsetX2
        y += ofsetY
        DrawArc(ctx, x, y, radius, 2 * Math.PI, 0 * Math.PI, '#ff0')

        // Blue
        x -= ofsetX2
        y -= ofsetY
        DrawArc(ctx, x, y, radius, 0.9 * Math.PI, 0.30 * Math.PI, '#00f')

        // Black
        x += ofsetX
        DrawArc(ctx, x, y, radius, 0.20 * Math.PI, 0.80 * Math.PI, '#000')

        // Red
        x += ofsetX
        DrawArc(ctx, x, y, radius, 0.75 * Math.PI, 2 * Math.PI, '#f00')

        // Green
        x -= ofsetX2
        y += ofsetY
        DrawArc(ctx, x, y, radius, 0 * Math.PI, 2 * Math.PI, '#0f0')

        // Black
        x -= ofsetX2
        y -= ofsetY
        DrawArc(ctx, x, y, radius, 1.75 * Math.PI, 0.25 * Math.PI, '#000')

        // Red
        x += ofsetX
        DrawArc(ctx, x, y, radius, 1.25 * Math.PI, 0.80 * Math.PI, '#f00')


    }


    onChangeRadius(event) {
        let Tr = event.target.value
        if (Tr < 130 && Tr > 70) {
            this.setState({
                radius: event.target.value
            })
        }
    }
    
    onChangeLwid(event) {
        let Tr = event.target.value
        if (Tr < 40) {
            this.setState({
                Lwid: event.target.value
            })
        }
    }

    render() {
        return (
            <div>

                <Pane width='300px'>
                    <TextInputField
                        label=" Radius value "
                        hint=" "
                        placeholder="Enter Radius Value"
                        type="number"
                        value={this.state.radius}
                        onChange={this.onChangeRadius.bind(this)}
                    />
                    <TextInputField
                        minValue="0"
                        label="line thickness"
                        hint=" "
                        placeholder="Enter line thickness"
                        type="number"
                        value={this.state.Lwid}
                        onChange={this.onChangeLwid.bind(this)}
                    />
                </Pane>
                <canvas width="1000px" height="600px" ref={this.canvas} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))



