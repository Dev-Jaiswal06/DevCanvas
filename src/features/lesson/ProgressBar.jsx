function ProgressBar({ completed, total }) {

const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (

<div className="mt-10">

<div className="w-full h-3 rounded-full bg-white/10">

<div
className="h-full bg-cyan-400 rounded-full"
style={{width:`${progress}%`}}
>

</div>

</div>

<p className="mt-4">

Progress {progress}%

</p>

</div>

  );
}

export default ProgressBar;
