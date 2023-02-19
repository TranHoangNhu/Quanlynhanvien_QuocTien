const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
require("mongoose-long")(mongoose);
const {
  Types: { Long },
} = mongoose;

const user = new Schema(
  {
    username: { type: String }, //Tài khoản
    password: { type: String }, //Mật khẩu
    displayName: { type: String, required: true }, //Tên hiển thị trên phần mềm
    basicSalary: { type: Long, required: true }, //Lương căn bản
    position: { type: String, required: true }, //Chức vụ
    startDay: { type: String }, //ngày vào làm, có thể không ghi nếu là nhân viên cũ.
    totalDay: { type: Long, default: 30, required: true }, //tổng số ngày trong tháng ( mặc định 1 tháng 30 ngày)
    offDay: { type: Long, default: 0, required: true }, //Ngày nghỉ
    weekendDay: { type: Long, default: 0, required: true }, //Ngày làm thêm cuối tuần (ngày CN)
    giftSalary: { type: Long, default: 0, required: true }, //Lương thưởng
    advanceSalary: { type: Long, default: 0, required: true }, //Lương trừ (Ứng, bị phạt,...)\
  },
  {
    netSalary: {
      type: Long,
      function() {
        return (
          this.basicSalary +
          this.giftSalary +
          (this.basicSalary / 30) * this.weekendDay -
          this.advanceSalary -
          (this.basicSalary / 30) * this.offDay
        );
      },
    },
    timestamps: true, // biến ngày chung để tính createAt, DeleteAt,.....
  }
);

module.exports = mongoose.model("user", user);
