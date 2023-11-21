window.addEventListener('DOMContentLoaded', () => {
    const deleteBtns = document.querySelectorAll('h1.delete')
    console.log(deleteBtns);
    const tweetsContainer = document.getElementById('tweet_container')

    deleteBtns.forEach(btn =>{
        btn.addEventListener('click',(event)=>{
            const tweetId = event.target.getAttribute('tweetid');
            axios.delete(`/tweet/${tweetId}`)
                .then(response => {
                    btn.parentNode.parentNode.remove()
                })
                .catch(error => {
                    console.log(error)
                })
        })
    })
})
