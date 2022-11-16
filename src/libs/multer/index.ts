import multer from "multer"

const storage = multer.diskStorage({
	destination: "./uploads",
	filename: (req, file, cb) => {
		cb(null, `${file.originalname}-${Date.now()}`)
	}
})

const upload = multer({ storage })

export { storage, upload }
