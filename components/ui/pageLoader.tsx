import Loader from './loader'

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-xl">
        <Loader />
        <p className="text-sm text-slate-600">Creating account…</p>
      </div>
    </div>
  )
}

export default PageLoader
