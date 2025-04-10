// <<MODEL_VIEW>>
class View {
    static blank() {
        return ""
    }

    static space() {
        return "&nbsp;"
    }

    static tab() {
        return View.space().repeat(4)
    }

    static newline() {
        return "<br>"
    }

    static clr() {
        document.body.style.fontFamily = "Courier New"
        document.body.innerHTML = ""
    }

    static out(newText) {
        document.body.innerHTML += newText
    }

    static add(newText) {
        document.body.innerHTML += `<br>${newText}`
    }
}