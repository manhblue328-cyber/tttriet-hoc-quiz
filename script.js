const questions = [
    {
        q: "Phản ánh ý thức khác với các hình thức phản ánh khác của thế giới vật chất ở tính chất nào?",
        options: ["Tính năng động, sáng tạo", "Tính cảm ứng", "Tính đúng đắn", "Tính thụ động"],
        answer: 0
    },
    {
        q: "Theo Ph. Ăngghen, động lực xã hội trực tiếp thúc đẩy sự ra đời của ý thức là?",
        options: ["Não người và thế giới", "Hoạt động nghiên cứu khoa học", "Bộ não và các cơ quan cảm giác", "Lao động và ngôn ngữ"],
        answer: 3
    },
    {
        q: "Các nhà triết học duy vật trước Mác thường đồng nhất vật chất với?",
        options: ["Vật thể", "Tồn tại", "Tự nhiên", "Hiện thực"],
        answer: 0
    },
    {
        q: "V.I. Lênin khẳng định, cái đang tồn tại độc lập với loài người gọi là?",
        options: ["Thực tại chủ quan", "Thực tại khách quan", "Phán đoán", "Khái niệm"],
        answer: 1
    },
    {
        q: "Quan niệm về vật chất của Lênin khác chủ nghĩa kinh nghiệm ở điểm nào?",
        options: [
            "Thừa nhận vật chất tồn tại vĩnh viễn",
            "Đồng nhất vật chất với khối lượng",
            "Thừa nhận vật chất tồn tại khách quan",
            "Đồng nhất vật chất với dạng cụ thể"
        ],
        answer: 2
    }
];

const quizContainer = document.getElementById("quiz-container");

questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `<p><b>Câu ${index + 1}:</b> ${item.q}</p>` +
        item.options.map((opt, i) =>
            `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`
        ).join("");

    quizContainer.appendChild(div);
});

document.getElementById("submit").onclick = () => {
    let score = 0;
    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer) score++;
    });
    document.getElementById("result").innerText = `Kết quả: ${score}/${questions.length}`;
};
