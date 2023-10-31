<script>
    export let fixed = true;
    export let request;
    
    const url = request.permalink != "/" ? "/" : "";
    export const leftLinks = [{
            href: url + "#norm", 
            imgClass: "background-net",
            text: "<code>Norm.net</code>", 
            title: `Fast and modern database mapper for <strong>.NET Standard</strong>.`
        }, {
            href: url + "#pgroutiner", 
            imgClass: "background-pg",
            text: "<code>PgRoutiner</code>", 
            title: "Everything your need for a <strong>database-first</strong> development with the <strong>PostgreSQL</strong> and <strong>.NET projects</strong>."
        }, {
            href: url + "#razor-svelte", 
            imgClass: "background-svelte",
            text: "<code>RazorSvelte</code>", 
            title: "Combine seamlessly <strong>Svelte</strong> - a radical new approach to building user interfaces -  with your <strong>ASP.NET Razor Pages</strong>."
        }
    ];
    export const rightLinks = [{
            href: "/articles", 
            imgClass: "icon-book-open",
            text: "<span>Articles</span>", 
            title: "Search our <strong>Blogs And Articles</strong>!"
        }, {
            href: "https://www.linkedin.com/in/vb-software/detail/recent-activity/shares/", 
            imgClass: "icon-linkedin-rect",
            text: "<span>Posts</span>", 
            title: "Search our Popular <strong>Social Media</strong> Content!"
        }
    ];
</script>

<nav class="navbar {fixed ? "fixed-top" : ""} navbar-expand-lg navbar-dark bg-primary">
    <div class="container">

        <!-- <a class="navbar-brand" href="/">{title}</a> -->
        <button class="navbar-toggler ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="collapse">
            <ul id="spy" class="navbar-nav me-auto mb-2 mb-md-0">
                {#each leftLinks as link}
                <li class="nav-item">
                    <a  onclick="onnavclick(this)" 
                        href={link.href} 
                        class="nav-link" 
                        data-bs-toggle="tooltip" data-bs-html="true" title={link.title}>
                        <span class="nav-img {link.imgClass}"></span>
                        {@html link.text}
                    </a>
                </li>
                {/each}
            </ul>
            <div class="">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    {#each rightLinks as link}
                    <li class="nav-item">
                        <a  onclick="onnavclick(this)" 
                            href={link.href} 
                            class="nav-link {request.permalink == link.href ? "active" : ""}" 
                            data-bs-toggle="tooltip" data-bs-html="true" title={link.title}>
                            <i class="{link.imgClass}"></i>
                            {@html link.text}
                        </a>
                    </li>
                    {/each}

                </ul>
            </div>
        </div>
    </div>
</nav>

<style lang="scss">
    @import "../styles/colors.scss";
    nav {
        & .navbar-toggler:focus {
            text-decoration: initial; 
            outline: initial;
            box-shadow: initial;
        }
        & .navbar-toggler:not(.collapsed) {
            background-color: $toggler-expanded;
        }
        & .navbar-toggler {
            border: 0;
        }
        & .nav-item {
            border-radius: 6px;
            border: 1px solid transparent;

            & .nav-link {
                display: flex;
                align-items: center;
            }
            & span.nav-img {
                display: inline-block;
                width: 25px;
                height: 25px;
                margin-right: 5px;
                border-radius: 5px;
            }
        }
        & .nav-item:hover {
            border: 1px solid $nav-item-hover-border-color;
            color: $white;
        }
    }
    
</style>