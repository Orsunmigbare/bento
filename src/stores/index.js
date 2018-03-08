import ApiStore from "./apiStore"
import UIStore from "./uiStore"

const apiStore = new ApiStore()
const uiStore = new UIStore()
uiStore.setStep(4)
// apiStore.getResult()
apiStore.getResultFromApi()

export { apiStore, uiStore }
