import React from 'react'
import animationData from '../lotties/loading.json'
import Lottie from 'lottie-react'

export const Loading = () => {
    return (
        <Lottie animationData={animationData}></Lottie>
    )
}
