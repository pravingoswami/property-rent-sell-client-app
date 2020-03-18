import { createStore, combineReducers } from "redux"
import PropertiesReducers from "../reducers/PropertiesReducers"
import PropertyTypesReducers from "../reducers/PropertyTypesReducers"
import FeaturesReducers from "../reducers/FeaturesReducers"


const configureStore = () => {
    const store = createStore(combineReducers({
        properties : PropertiesReducers,
        propertyTypes : PropertyTypesReducers,
        features : FeaturesReducers
    }))

    return store
}

export default configureStore