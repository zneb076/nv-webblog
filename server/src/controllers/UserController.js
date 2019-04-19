module.exports = {
    // get all user
    index (req, res) {
        res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
    },

    // create user
    create (req, res){
        res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    },

    // edit user , suspend, active
    put (req, res) {
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req,res))
    },

    // delete user
    remove (req, res){
        res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req,res))
    },

    // get user by id
    show (req, res){
        res.send('ดูข้อมูลผู้ใช้: ' + req.params.userId)
    }
}