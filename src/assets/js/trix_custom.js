Trix.config.attachments.preview.caption.name = false;
Trix.config.attachments.preview.caption.size = false;
var HOST = "https://d13txem1unpe48.cloudfront.net/";
addEventListener("trix-attachment-add", function (event) {
    if (event) {
        uploadFileAttachment(event)
    }
})

function uploadFileAttachment(event) {
    uploadFile(event.attachment.file, setProgress, setAttributes)

    function setProgress(progress) {
        event.attachment.setUploadProgress(progress)
    }

    function setAttributes(attributes) {
        event.attachment.setAttributes(attributes)
    }
}

function uploadFile(file, progressCallback, successCallback) {
    var key = createStorageKey(file)
    var formData = createFormData(key, file)
    var xhr = new XMLHttpRequest()

    xhr.open("POST", HOST, true)

    xhr.upload.addEventListener("progress", function (event) {
        var progress = event.loaded / event.total * 100
        progressCallback(progress)
    })

    xhr.addEventListener("load", function (event) {
        if (xhr.status == 204) {
            var attributes = {
                url: HOST + key,
                href: HOST + key + "?content-disposition=attachment"
            }
            successCallback(attributes)
        }
    })

    xhr.send(formData)
}

function createStorageKey(file) {
    var date = new Date()
    var day = date.toISOString().slice(0, 10)
    var name = date.getTime() + "-" + file.name
    return ["tmp", day, name].join("/")
}

function createFormData(key, file) {
    var data = new FormData()
    data.append("key", key)
    data.append("Content-Type", file.type)
    data.append("file", file)
    return data
}