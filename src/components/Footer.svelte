<script>
    export let request;
    export let data;
    export let year = new Date().getFullYear();
    export let links = [
        // {href: "/pricing/", text: "Pricing", title: "See our Pricing"},
        // {href: "/blogs/", text: "Blogs", title: "Read Blogs and Latest News on Venture Capital World"},
        // {href: "/faq/", text: "FAQ", title: "Frequently Asked Questions"}
    ];
    const title = process.env.TITLE;
</script>

<footer class="text-light py-5">
    <div class="container py-5">
        <div class="row">

            <div class="col-6 col-md-6 col-lg-3 mb-2">
                <p class="text-uppercase fs-5 fw-bolder">Latest Blogs</p>
                <ul class="nav flex-column fs-6 blog-list">
                    {#each data.footerBlogs as blog}
                    <li>
                        <a class="text-white {request.permalink == blog.url ? "active" : ""}" 
                            href="{blog.url}"
                            data-bs-toggle="tooltip" data-bs-html="true" title={blog.description}>
                            {blog.title}
                        </a>
                    </li>
                    {/each}
                </ul>
            </div>

            <div class="col">
                <div class="container h-100">
                    <div class="row justify-content-lg-center">
                        <div class="col-lg-auto">
                            <p class="text-uppercase fs-5 fw-bolder">&copy; {title} {year}</p>
                        </div>
                    </div>
                    <div class="row justify-content-lg-center">
                        {#each links as link}
                        <div class="col-lg-auto">
                            <a class="text-white {request.permalink == link.href ? "active" : ""} {link.classes ? link.classes : ""}" 
                                href="{link.href}"
                                data-bs-toggle="tooltip" data-bs-html="true" title={link.title}>
                                {link.text}
                            </a>
                        </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

    </div>
</footer>
<style lang="scss">
    @import "../styles/colors";

    footer {
        background-color: $footer-color !important;
        .blog-list {
            li {
                padding-bottom: 5px;
            }
        }
        a.active {
            font-weight: bolder;
            font-size: 1.1em;
            text-decoration: none;
        }
    }
</style>
