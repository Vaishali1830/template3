import image from '../../assets/pic6.jpeg'
export const Section2 = () => {
    return(
        <div className='relative '>
            <img src={image} alt="" className='h-[30vh] w-full'/>
            <div className='absolute inset-0 w-[40vw] left-3/10 items-center justify-center flex'>
                <h1 className='white-text text-3xl font-bold  text-center'>Our programs
                empower you for your career journey and a lifetime of continuous learning and growth.</h1>
            </div>
            <div className='gradient-border'></div>

        </div>
    )
}