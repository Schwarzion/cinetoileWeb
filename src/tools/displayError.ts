import { DialogProgrammatic as dialog } from "buefy";

export const displayError = (response: any) => {
    dialog.alert(`Erreur ${response.status} : ${response.data.error}`);
}