{
    "manifest_version": 2,
    "name":"Boderify",
    "version": "1.0",

    "description": "Adds a red border to all webpages matching mozilla.org",

    "icons": {
        "48": "icons/border-48.png"
    },

    "content_scripts": [
        {
            "matches": ["*://*.mozilla.org/*"],
            "js":["boderify.js"]
        }
    ]
    
}