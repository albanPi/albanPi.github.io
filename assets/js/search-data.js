// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Dedicated to projects I follow closely and mines.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-curriculum-vitæ",
          title: "Curriculum Vitæ",
          description: "My résumé below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials of my courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-sujet-de-tipe-irm",
        
          title: "Sujet de TIPE - IRM",
        
        description: "Fonctionnement de l&#39;IRM - des atomes à la construction d&#39;images.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/tipe/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-website-under-construction-smile",
          title: 'Website under construction :smile:.',
          description: "",
          section: "News",},{id: "news-tipe-article-in-french-is-now-available",
          title: 'TIPE article (in French) is now available !',
          description: "",
          section: "News",},{id: "projects-benchopt",
          title: 'Benchopt',
          description: "Benchmarks for ML algorithms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/benchopt/";
            },},{id: "projects-deepinverse",
          title: 'DeepInverse',
          description: "Python Torch-based package for inverse problems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deepinv/";
            },},{id: "projects-mri-reconstruction-project",
          title: 'MRI Reconstruction project',
          description: "Soon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tipe/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/albanPi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alban-bourbon", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
