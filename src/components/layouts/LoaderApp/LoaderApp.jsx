import { Spinner } from 'flowbite-react'

const LoaderApp = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <section>
        <Spinner size="xl" />
      </section>
    </main>
  )
}

export default LoaderApp
