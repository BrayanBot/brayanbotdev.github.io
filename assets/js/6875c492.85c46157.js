"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[8610],{2568:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(7325),l=a(3672);function o(e){var t=e.metadata,a=t.previousPage,o=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(l.Z,{permalink:o,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8389:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(9107),l=a(1116);function o(e){var t=e.items,a=e.component,o=void 0===a?l.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(o,null,n.createElement(t,null)))})))}},4883:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(4334),l=a(7325),o=a(3777),i=a(9488),s=a(3702),g=a(3699),c=a(2506),u=a(2568),m=a(3647),p=a(8389);function d(e){var t,a=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function b(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(i.d,{title:t}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function h(e){var t=e.tag,a=e.items,r=e.sidebar,o=e.listMetadata,i=d(t);return n.createElement(c.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,i),n.createElement(g.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(u.Z,{metadata:o}))}function E(e){return n.createElement(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},n.createElement(b,e),n.createElement(h,e))}}}]);