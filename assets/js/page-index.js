(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "contact.md",
                title: "Contact us",
                url: "/opendoc-datagovsg-data-quality-guide/contact.html",
                escapedPath: "contact.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Data.gov.sg Data Quality Guide",null,["key_principles.md","data_packages.md","structure.md","reserved_columns.md","contact.md"]]
            },
            
        {
                name: "data_packages.md",
                title: "Data Packages",
                url: "/opendoc-datagovsg-data-quality-guide/data_packages.html",
                escapedPath: "data_packages.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Data.gov.sg Data Quality Guide",null,["key_principles.md","data_packages.md","structure.md","reserved_columns.md","contact.md"]]
            },
            
        {
                name: "index.md",
                title: "Data.gov.sg Data Quality Guide for Tabular Data",
                url: "/opendoc-datagovsg-data-quality-guide/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Data.gov.sg Data Quality Guide",null,["key_principles.md","data_packages.md","structure.md","reserved_columns.md","contact.md"]]
            },
            
        {
                name: "key_principles.md",
                title: "Key Principles",
                url: "/opendoc-datagovsg-data-quality-guide/key_principles.html",
                escapedPath: "key_principles.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Data.gov.sg Data Quality Guide",null,["key_principles.md","data_packages.md","structure.md","reserved_columns.md","contact.md"]]
            },
            
        {
                name: "reserved_columns.md",
                title: "Reserved column names",
                url: "/opendoc-datagovsg-data-quality-guide/reserved_columns.html",
                escapedPath: "reserved_columns.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Data.gov.sg Data Quality Guide",null,["key_principles.md","data_packages.md","structure.md","reserved_columns.md","contact.md"]]
            },
            
        {
                name: "structure.md",
                title: "Structure for Tabular Data",
                url: "/opendoc-datagovsg-data-quality-guide/structure.html",
                escapedPath: "structure.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Data.gov.sg Data Quality Guide",null,["key_principles.md","data_packages.md","structure.md","reserved_columns.md","contact.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()