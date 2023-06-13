
    window.onload = function() {
    var password = prompt('请输入密码'); // 弹出密码输入对话框

    // 在这里进行密码验证
    if (password === 'your_password') {
        // 密码正确，显示内容
        alert('密码正确！'); // 或者根据需要进行其他操作
    } else {
        // 密码错误，重定向到其他页面或显示错误信息
        window.location.href = 'wrong_password.html'; // 重定向到密码错误页面
    }
  };

