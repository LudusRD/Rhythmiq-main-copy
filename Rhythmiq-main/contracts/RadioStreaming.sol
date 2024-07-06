pragma ton-solidity >= 0.50.0;

contract RadioStreaming {
    address public admin;
    mapping(address => uint256) public listenerTime;
    uint256 public maxListeningTime = 2 hours;

    event TokensEarned(address listener, uint256 tokensEarned);

    constructor() public {
        admin = msg.sender;
    }

    function listen(uint256 duration) external {
        require(duration <= maxListeningTime, "Exceeded maximum listening time");
        listenerTime[msg.sender] += duration;
        uint256 tokensEarned = calculateTokens(duration);
        // Логика начисления токенов Rhythmiq
        emit TokensEarned(msg.sender, tokensEarned);
    }

    function calculateTokens(uint256 duration) internal pure returns (uint256) {
        // Пример расчета токенов, можно адаптировать под свои условия
        if (duration >= maxListeningTime / 2) {
            return 100;
        } else {
            return 50;
        }
    }

    function withdrawTokens(uint256 amount) external {
        // Логика вывода токенов на основной кошелек Telegram
        require(msg.sender == admin, "Only admin can withdraw tokens");
        // Логика вывода токенов
    }
}
