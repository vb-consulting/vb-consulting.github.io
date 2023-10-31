<script>
    export let request;
    export let settings;
    export let data;
</script>

<svelte:head>
    <title>
        VB-Software - Get The Most Out Of The World's Most Advanced Open-Source Full-Stack Eco-Systems
    </title>
    <meta name="description" content="VB-Software - Get The Most Out Of The World's Most Advanced Open-Source Full-Stack Eco-Systems - Norm.net, PgRoutiner" />
    <meta name="keywords" content=".NET, PostgreSQL, C#, CSHARP, SQL, PGPSQL, Svelte, Razor, ASP.NET">
    <link href="{`${settings.origin}${request.permalink}`}" rel="canonical" />
</svelte:head>


<header class="gradient1">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center m-0 vh-100 d-flex flex-column justify-content-center text-light">
                    <h1 class="fs-3 text-capitalize fw-bolder text-shadow">
                        Get the most out of the world's most advanced open-source full-stack eco-systems
                    </h1>
                    <div class="flex-sm-row">
                        <div class="col logo background-svelte" data-bs-toggle="tooltip" data-bs-html="true" title="<strong>Svelte</strong><br />Cybernetically Enhanced Web Apps"></div>
                        <div class="col logo background-net" data-bs-toggle="tooltip" data-bs-html="true" title="<strong>.NET</strong><br />Free. Cross-platform. Open source. A Developer Platform For Building All Your Apps."></div>
                        <div class="col logo background-pg" data-bs-toggle="tooltip" data-bs-html="true" title="<strong>PostgreSQL</strong><br />The World's Most Advanced Open Source Relational Database"></div>
                        <div class="flex-sm-row">
                            <div class="subtitle">
                                <div class="text-capitalize">
                                    The 
                                    <a title="Svelte and ASP.NET Core are the most loved web frameworks by professional developers according to the StackOverflow 2021 survey." data-bs-toggle="tooltip" data-bs-html="true"
                                        href="https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-love-dread" target="_blank">most loved web frameworks</a> 
                                    and The World's 
                                    <a title="PostgreSQL is the worlds most advanced open source database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance." data-bs-toggle="tooltip" data-bs-html="true" 
                                        href="https://www.postgresql.org/" target="_blank">Most Advanced Open Source Database</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section id="norm" class="gradient2">
    <div class="container mb-5"></div>
    <div class="container my-3 px-4">
        <div class="row p-5 bg-light border rounded-3 box-shadow">
            <div class="mb-4 p-0">
                <div class="panel-title">
                    <div class="d-flex align-items-center border-bottom border-primary">
                        <h2 class="d-inline"><pre>Norm.net</pre></h2>
                        <pre class="ms-2 fw-p-1 fw-bolder">{data.norm}</pre>
                    </div>
                    <div>
                        <span class="background-net rounded" data-bs-toggle="tooltip" title=".NET Standard 2.1"></span>
                        <a class="me-1" href="https://github.com/vb-consulting/Norm.net/" data-bs-toggle="tooltip" title="Source Code" target="_blank">
                            <div class="background-github"></div>
                        </a>
                        <a class="me-1" href="https://www.nuget.org/packages/Norm.net/" data-bs-toggle="tooltip" title="Nuget Package" target="_blank">
                            <div class="background-nuget"></div>
                        </a>
                        <span class="open-source rounded me-1" data-bs-toggle="tooltip" title="Open Source"></span>
                    </div>
                </div>
            </div>
            <div class="p-0">
                <h4 class="lead" style="font-weight: 400;">
                    Modern <strong>Micro Object-Relational Mapper</strong> for <strong>.NET Standard</strong>.
                </h4>
            </div>
            <div class="mt-4 p-0">
                <a href="https://github.com/vb-consulting/Norm.net" class="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Mapping Performances
                        </h4>
                        <p class="card-text">
                            Mapping performances matches and, in some cases surpasses Dapper performances.
                        </p>
                        <p class="card-text">
                            In most cases, mapping performances are indistinguishable from raw data reader access.
                        </p>
                        <p class="card-text">
                            <strong>Speed up your access</strong> to your database.
                        </p>
                        <a href="https://github.com/vb-consulting/Norm.net/blob/master/PERFOMANCE-TESTS.md" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Modern Features and Developer Productivity
                        </h4>
                        <p class="card-text">
                            <strong>Map to anything</strong>, not just classer or records - simple values, tuples, or named tuples. Map to multiple values or structures simultaneously from the same result or from the multiple results.
                        </p>
                        <p class="card-text">
                            Take advantage of the results <strong>enumerator extenedibility</strong> to build your custom mapper without any additional performance penalty.
                        </p>
                        <p class="card-text">
                            Use <strong>asynchronous streaming</strong> directly from your database and proces records as they appear on the reader.
                        </p>
                        <a href="https://github.com/vb-consulting/Norm.net" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Open Source and Free Support
                        </h4>
                        <p class="card-text">
                            Open-sourced with Source Links included. Source Link is a technology that enables source code debugging for .NET libraries.
                        </p>
                        <p class="card-text">
                            Over 300 automated tests for PostgreSQL, MySQL, SQLServer, and SQLite.
                        </p>
                        <p class="card-text">
                            <strong>Free support.</strong>
                        </p>
                        <a href="https://github.com/vb-consulting/Norm.net" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="pgroutiner" class="gradient1">
    <div class="container mb-3 px-4">
        <div class="row p-5 bg-light border rounded-3 box-shadow">
            <div class="mb-4 p-0">
                <div class="panel-title">
                    <div class="d-flex align-items-center border-bottom border-primary">
                        <h2 class="d-inline"><pre>PgRoutiner</pre></h2>
                        <pre class="ms-2 fw-p-1 fw-bolder">{data.pgroutiner}</pre>
                    </div>
                    <div>
                        <span class="background-pg rounded" data-bs-toggle="tooltip" title="PostgreSQL"></span>
                        <span class="background-cs rounded me-1" data-bs-toggle="tooltip" title="C# 9"></span>
                        <a class="me-1" href="https://github.com/vb-consulting/PgRoutiner" data-bs-toggle="tooltip" title="Source Code" target="_blank">
                            <div class="background-github"></div>
                        </a>
                        <a class="me-1" href="https://www.nuget.org/packages/dotnet-pgroutiner/" data-bs-toggle="tooltip" title="Nuget Package" target="_blank">
                            <div class="background-nuget"></div>
                        </a>
                        <span class="open-source rounded me-1" data-bs-toggle="tooltip" title="Open Source"></span>
                    </div>
                </div>
            </div>
            <div class="p-0">
                <h4 class="lead" style="font-weight: 400;">
                    Complete set of tools for the <strong>database-first development</strong> with the <strong>PostgreSQL</strong> and/or <strong>.NET/C#</strong> tech stack.
                </h4>
            </div>
            <div class="mt-4 p-0">
                <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
    <div class="container my-3">
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Generate C# Code for your PostgreSQL Routines Automatically
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Generate C# CRUD Code for your PostgreSQL Tables Automatically
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Generate A Ready Made Unit Tests Templates for every piece of your Automatically Generated C# Code
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Build Schema Scripts And Include Them With Your Source Code
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Build Data Scripts for the Selected Tables And Include Them With Your Source Code
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Build Schema Files for Individual Objects and Place Them In Your Project Directory Tree
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Run PSQL Commands with Ease From Your Project Configuration
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Generate and maintain Markdown documentation from COMMENT objects for your database
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Generate A Difference Schema Scripts Between Two Database Connections
                        </h4>
                        <a href="https://www.nuget.org/packages/dotnet-pgroutiner/" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="razor-svelte" class="gradient2" style="">
    <div class="container mb-3 px-4">
        <div class="row p-5 bg-light border rounded-3 box-shadow">
            <div class="mb-4 p-0">
                <div class="panel-title">
                    <div class="d-flex align-items-center border-bottom border-primary">
                        <h2 class="d-inline code"><pre>RazorSvelte</pre></h2>
                        <pre class="ms-2 fw-p-1 fw-bolder">web-app-template</pre>
                    </div>
                    <div>
                        <span class="background-svelte rounded" style="margin-left: 3px;" data-bs-toggle="tooltip" title="Svelte - Cybernetically enhanced web apps"></span>
                        <span class="background-net rounded" data-bs-toggle="tooltip" title=".NET5 Razor Pages"></span>
                        <span class="background-cs rounded me-1" data-bs-toggle="tooltip" title="C# 9"></span>
                        <a class="me-1" href="https://github.com/vb-consulting/RazorSvelte" data-bs-toggle="tooltip" title="Source Code" target="_blank">
                            <div class="background-github"></div>
                        </a>
                        <span class="open-source rounded me-1" data-bs-toggle="tooltip" title="Open Source"></span>
                    </div>
                </div>
            </div>
            <div class="p-0">
                <h4 class="lead" style="font-weight: 400;">
                    Combine seamlessly <strong>Svelte</strong> - a radical new approach to building user interfaces -  with your <strong>ASP.NET Razor Pages</strong>.
                </h4>
            </div>
            <div class="mt-4 p-0">
                <a href="https://github.com/vb-consulting/RazorSvelte" class="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
    <div class="container my-3">
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Svelte is a radical new approach to building user interfaces. 
                        </h4>
                        <p class="card-text">
                            <strong>Write less code and achieve more.</strong> Build boilerplate-free components using languages you already know — HTML, CSS and JavaScript
                        </p>
                        <p class="card-text">
                            <strong>No virtual DOM</strong>. Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and stays fast.
                        </p>
                        <a href="https://github.com/vb-consulting/RazorSvelte#why" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Preconfigured to use with your ASP.NET Razor Pages
                        </h4>
                        <p class="card-text">
                            Template also includes seamless integration of the Svelte components with your <strong>ASP.NET Razor Pages</strong>. 
                            There is <strong>no need for additional web server</strong> which simplifies the entire stack..
                        </p>
                        <p class="card-text">
                            Already preconfigured to use with <strong>TypeScript</strong>, <strong>Bootrsap 5</strong> and <strong>SCSS</strong>.
                        </p>
                        <p class="card-text">
                            Preconfigured <strong>Rollup</strong> can help you import any old legacy scripts or modules, remove unused ones, and even share code between your projects.
                        </p>
                        <a href="https://github.com/vb-consulting/RazorSvelte#why" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-primary text-white h-100 rounded-3 box-shadow">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="card-title mb-3 text-capitalize">
                            Templates includes JWT token authentication
                        </h4>
                        <p class="card-text">
                            <strong>JWT token authentication</strong> with cookies with optional refresh tokens for maximal security.
                        </p>
                        <p class="card-text">
                            Sample of three <strong>extrenal indetity providers</strong>:
                        </p>
                        <ul>
                            <li><strong>Google</strong></li>
                            <li><strong>LinkedIn</strong></li>
                            <li><strong>Github</strong></li>
                        </ul>
                        <p class="card-text">
                            Easy configuration templates gets you started within minutes.
                        </p>
                        <a href="https://github.com/vb-consulting/RazorSvelte#how-can-i-use-external-logins-from-google-linkedin-or-github-from-this-example" class="btn btn-primary border-white mt-auto">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{@html "<script>bootstrap && new bootstrap.ScrollSpy(document.body, {target: '#spy', offset: 180});</script>"}

<style lang="scss">
    @import "../../styles/colors";
    @import "../../styles/breakpoints";

    .subtitle {
        color: $primary;
        cursor: default;
        padding: 3px;
        box-shadow: 8px 8px 11px 0px $primary;
        font-size: 0.8em;
        font-weight: 900;
        font-family: var(--bs-font-monospace);
        display: inline-block;
        & > div {
            display: inline;
        }
        a { color: -webkit-link; }
    }
    .gradient1 {
        background-image: linear-gradient(180deg, $primary 10%, $white);
    }
    .gradient2 {
        background-image: linear-gradient(180deg, $white 10%, $primary);
    }
    .text-shadow {
        text-shadow: -1px 0 $primary, 0 1px $primary, 1px 0 $primary, 0 -1px 15px $primary;
    }
    .box-shadow {
        box-shadow: 8px 8px 11px 0px $primary;
    }
    .logo {
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        display: inline-block;
        border-radius: 5px;
    }
    .panel-title {
        display: grid; 

        @include media-breakpoint-down(sm) { 
            grid-template-rows: auto auto;
        }
        @include media-breakpoint-up(sm) { 
            grid-template-columns: min-content auto;
        }

        & > div:nth-child(1) {
            @include media-breakpoint-down(sm) { 
                width: fit-content;
                margin-bottom: 15px;
            }
        }

        & > div:nth-child(2) {
            @include media-breakpoint-down(sm) { 
                margin-top: 5px;
            }
            & > * {
                @include media-breakpoint-down(sm) { 
                    float: left;
                    margin-right: 5px;
                }
                @include media-breakpoint-up(sm) { 
                    float: right;
                }
                width: 40px;
                height: 40px;
                & > div {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
    .open-source {
        border: solid 1px $gray-500;
        font-size: 10px;
        font-family: monospace;
        text-align: center;
        color: $gray-600;
        line-height: 10px;
        padding-top: 8px;
        &::after {
            content: "open source"
        }
    }
    section {
        padding-top: 90px;
        padding-bottom: 90px;
        min-height: 80vh;
        @include media-breakpoint-down(lg) { 
            min-height: 110vh;
        }
    }
    pre {
        margin-bottom: 0;
    }
</style>