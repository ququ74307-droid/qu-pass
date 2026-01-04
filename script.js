document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('searchForm');
  const qInput=document.getElementById('q');
  const lucky=document.getElementById('lucky');

  lucky.addEventListener('click',()=>{
    const q=qInput.value.trim();
    if(!q){
      alert('请输入搜索内容');
      qInput.focus();
      return;
    }
    // Google 的 "I'm Feeling Lucky" 可以通过 btnI 参数尝试触发
    const url='https://www.google.com/search?btnI=I&q='+encodeURIComponent(q);
    window.open(url,'_blank');
  });

  form.addEventListener('submit',(e)=>{
    const q=qInput.value.trim();
    if(!q){
      e.preventDefault();
      qInput.focus();
    }
  });
});
