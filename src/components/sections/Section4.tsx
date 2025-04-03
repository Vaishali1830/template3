import image from '../../assets/bg3.jpeg'
export const Section4 =  () => {
    return(
        <div className='relative flex flex-col flex-wrap'>
            <img src={image} alt="" className='h-[100vh] object-cover w-full'/>
            <div className='absolute inset-0 w-[40vw] left-3/10 items-center justify-center flex flex-col gap-8'>
                <p className='white-text text-4xl font-bold text-center'>Reasons to choose Bow Valley College</p>
                <p className='white-text text-xl font-semibold text-center'>We are Calgary's only community college.</p>
                <p className='white-text text-xl font-semibold text-center'>Bow Valley College meets Alberta's high program quality standards while offering affordable tuition rates.</p>
            </div>
        </div>
    )
}