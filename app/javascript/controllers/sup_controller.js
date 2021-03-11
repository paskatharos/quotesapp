import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "list" ]

    addSupWorld() {
        const listEl = this.listTarget
        var itemEl = document.createElement("li");
        itemEl.innerHTML = "Sup world from a Stimulus controller!";
        listEl.appendChild(itemEl);
    }
}