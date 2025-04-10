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

    static #clearStyles() {
        document.body.style.fontFamily = "Courier New"
    }

    static clear() {
        View.#clearStyles()
        document.body.innerHTML = ""
    }

    static out(newText) {
        // use try/catch to handle errors for DOM operations
        try {
            document.body.innerHTML += newText
        } catch (error) {
            console.error('Failed to render content:', error)
        }
    }
}
