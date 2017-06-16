
        $("#formUpdateSaleRecoder").submit(function (e) {
            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "@Url.Action("UpdateSaleRecoder", "SummarySalesReport")",
                data: $(this).serialize(),
                cache: false,
                timeout: 60000,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                beforeSend: function () {
                    LockUI(true);
                    $("#divAjaxFeedback").html("");
                    $("#myModalUpdateSaleRecoder").modal("hide");
                    ShowNotification("กำลังส่งข้อมูล โปรดรอ....", "info");
                },
                success: function (data) {
                    if (IsHasValue(data)) {
                        if (data.success) {
                            var msg = "<center>ระบบได้ดำเนินการส่งรายงานการขายของท่านให้แผนก EDP เรียบร้อยแล้ว เรียบร้อยแล้ว" + '<br> ไปหน้า <b><u>@Html.ActionLink("ตรวจสอบและส่งรายงานการขาย", "Index", "MonitorAndReportSales")</u></b></center>';
                            ShowNotification(msg, "success");
                        } else {
                            ShowNotification('ส่งรายงานการขาย ไม่สำเร็จ ', 'danger');
                        }
                    }
                },
                error: function (error) {
                    ShowNotification('เกิดข้อผิดพลาดในการส่งข้อมูลไปยังเซิฟเวอร์ โปรดตรวจสอบการเชื่อมต่อ', 'danger');
                },
                complete: function (complete) {
                    $("#txtSalesRecorderName").val("");
                    LockUI(false);
                }
            });
        });