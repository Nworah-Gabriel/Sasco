import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Timestamp } from "firebase/firestore"

interface InitialState {
    formData: {
        name: string
        email: string
        phone: string
        vehicle: string
        whereAndHowWouldYouDeliver: string
        profilePicture: string,
        validID: string
        nin: string
        vehiclePhoto: string
        bankAccountNumber: string
        bankName: string
        dob: string | number
        status: string
        createdAt: Timestamp | null
    }
}

const initialState: InitialState = {
    formData: {
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        whereAndHowWouldYouDeliver: '',
        profilePicture: '',
        validID: '',
        nin: '',
        vehiclePhoto: '',
        bankAccountNumber: '',
        bankName: '',
        dob: '',
        status: '',
        createdAt: null
    }
}

const riderSlice = createSlice({
    name: 'rider',
    initialState,
    reducers: {
        setRider: (state: InitialState, action: PayloadAction<{}>) => {
            state.formData = { ...state.formData, ...action.payload }
        },
        resetFormData: (state: InitialState) => {
            state.formData = initialState.formData
        }
    }
})

export const { setRider, resetFormData } = riderSlice.actions
export default riderSlice.reducer