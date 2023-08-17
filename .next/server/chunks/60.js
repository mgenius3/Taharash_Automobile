"use strict";
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 8060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var imagekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3386);
/* harmony import */ var imagekit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(imagekit__WEBPACK_IMPORTED_MODULE_3__);




const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
};
const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box"
};
const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
};
const img = {
    display: "block",
    width: "auto",
    height: "100%"
};
const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
};
const focusedStyle = {
    borderColor: "#2196f3"
};
const acceptStyle = {
    borderColor: "#00e676"
};
const rejectStyle = {
    borderColor: "#ff1744"
};
function ImageUpload({ setFileUploadError , setImageUrl , maxImages , maxSizes , optionalFunction =null ,  }) {
    const { 0: uploading , 1: setUploading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { getRootProps , getInputProps , isFocused , isDragAccept , isDragReject  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)({
        accept: {
            "image/*": [
                ".jpeg",
                ".png"
            ]
        },
        maxFiles: maxImages,
        maxSize: maxSizes,
        onDropRejected: (e)=>{
            let error = e[0]?.errors[0].code;
            setFileUploadError(error);
            setUploading(-1);
        },
        onDrop: (acceptedFiles)=>{
            setFiles(acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            let immediateFile = acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
            handleUploadToImageKit(immediateFile);
        }
    });
    const handleUploadToImageKit = async (files)=>{
        setUploading(1);
        const imagekit = new (imagekit__WEBPACK_IMPORTED_MODULE_3___default())({
            publicKey: "public_G1mBGH4ynRy46gzsggJdCguDRZA=",
            privateKey: "private_Df2/XKDIEaIDztFzQ+tAJVmKAOI=",
            urlEndpoint: "https://ik.imagekit.io/padeusnha"
        });
        const uploadPromises = [];
        for(let i = 0; i < files.length; i++){
            const file = files[i];
            const uploadPromise = imagekit.upload({
                file,
                fileName: file.name
            });
            uploadPromises.push(uploadPromise);
        }
        try {
            const responses = await Promise.all(uploadPromises);
            const uploadedImageUrls = responses.map((response)=>response.url);
            if (uploadedImageUrls.length == 0 || !uploadedImageUrls) {
                setUploading(-1);
            } else {
                setUploading(2);
                setImageUrl(uploadedImageUrls);
                if (optionalFunction != null) optionalFunction(uploadedImageUrls);
            }
        } catch (error) {
            console.error("Error uploading images:", error);
        }
    };
    const thumbs = files.map((file)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: thumb,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: thumbInner,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: file.preview,
                    style: img,
                    // Revoke data uri after image is loaded
                    onLoad: ()=>{
                        URL.revokeObjectURL(file.preview);
                    }
                })
            })
        }, file.name);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return ()=>files.forEach((file)=>URL.revokeObjectURL(file.preview));
    }, [
        files
    ]);
    const style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...baseStyle,
            ...isFocused ? focusedStyle : {},
            ...isDragAccept ? acceptStyle : {},
            ...isDragReject ? rejectStyle : {}
        }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...getRootProps({
                    style
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-center",
                        children: [
                            "Drag 'n' drop some package image here,",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " or click to upload iamge"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "btn text-white",
                        children: [
                            "UPLOAD IMAGE",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: "32",
                                height: "32",
                                src: "https://img.icons8.com/windows/32/FFFFFF/file-upload.png",
                                alt: "file-upload"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                style: thumbsContainer,
                children: thumbs
            }),
            uploading == -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("em", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "30",
                        height: "30",
                        src: "https://img.icons8.com/sf-black-filled/64/FA5252/error.png",
                        alt: "checked--v1"
                    }),
                    " ",
                    "error; try again"
                ]
            }) : uploading == 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading-container mr-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "loader"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "uploading image, please wait"
                            })
                        ]
                    })
                ]
            }) : uploading == 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("em", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "20",
                        height: "20",
                        src: "https://img.icons8.com/ios-filled/50/90EE90/checked--v1.png",
                        alt: "checked--v1"
                    }),
                    " ",
                    "uploaded ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }) : null
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);


/***/ })

};
;