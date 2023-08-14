export const filterPosts = (posts: any, {filterDrafts = true, filterFutureDrafts = true} = {}) => {
    console.log(posts.frontmatter);
    return posts
        .filter((post: any) => {
            const {draft, date} = post.frontmatter;
            if (filterDrafts && draft) {
                return false;
            }
            return !(filterFutureDrafts && new Date() < new Date(date));
        })
}