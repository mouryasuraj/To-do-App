

function PreLoader() {


    // Event Listener to show preloader till the content load 
    window.addEventListener('load',()=>{
        const loader = document.querySelector('.preloader');
        loader.style.zIndex = '-999'
    })

  return (
    <div className={`preloader absolute bg-white z-[999] top-0 right-0 w-full h-[100vh] flex items-center justify-center`}>
      <img className='w-20' src="./loader.gif" alt="" />
    </div>
  )
}

export default PreLoader
