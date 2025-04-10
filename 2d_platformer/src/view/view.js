class View{
    canvas = () =>{
        return "<div style='background-color:red;'>aw</div>"
    }
    static render() {
        const content = new View
        return document.getElementById("main").innerHTML = content.canvas()
     }

}

 export default View