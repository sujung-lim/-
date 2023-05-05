import './BlogContent.css'

let blogTitle = [
    { no: 1, title: '여행 리뷰', visited: false },
    { no: 2, title: '맛집 리뷰', visited: true },
    // visited: true에 스타일 따로 지정해줄 것
    { no: 3, title: '제품 리뷰', visited: false }
];

function BlogContent() {
    // return (
    //     <div className="blogContent">
    //         <p>{blogTitle[0].title}</p>
    //         <p>{blogTitle[1].title}</p>
    //         <p>{blogTitle[2].title}</p>
    //     </div>
    // )
    let titles = blogTitle.map((post, index) => {
        return (
            <li key={index} className={post.visited ? "blog-post visited" : "blog-post"}>
                {post.title}
            </li>
            // 삼항연산자 사용하여 visited가 true라면 클래스명을 class="blot-post visited"로 false라면 "blog-post"로 지정해줄 수 있다
        )
    });

    return <ul className="blog-post">{titles}</ul>


}

export default BlogContent;