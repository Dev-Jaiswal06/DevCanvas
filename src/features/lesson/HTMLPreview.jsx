function HTMLPreview({ code }) {

return(

<div className="mt-12">

<h2 className="text-2xl font-bold mb-5">

Live Preview

</h2>

<div className="bg-white rounded-xl overflow-hidden">

<iframe

title="preview"

srcDoc={code}

className="w-full h-72"

/>

</div>

</div>

)

}

export default HTMLPreview;
