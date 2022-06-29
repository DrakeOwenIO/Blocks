export function getBattlePassColor() {
    let playerColor = '#FF00C1';
    let totalScore = 0;

    if (localStorage.getItem('totalScore') != null) {
        totalScore = localStorage.getItem('totalScore');
        totalScore = Number(totalScore);
        
        if(totalScore < 100){
            playerColor = '#FF00C1';
            localStorage.setItem('battlepassTier', 1);
        }
        if(totalScore >= 100 && totalScore < 200){
            playerColor = '#9600FF';
            localStorage.setItem('battlepassTier', 2);
        }
        
        if(totalScore >= 200 && totalScore < 300){
            playerColor = '#4900FF';
            localStorage.setItem('battlepassTier', 3);
        }

        if(totalScore >= 300 && totalScore < 400){
            playerColor = '#00B8FF';
            localStorage.setItem('battlepassTier', 4);
        }

        if(totalScore >= 400 && totalScore < 500){
            playerColor = '#0FFF9';
            localStorage.setItem('battlepassTier', 5);
        }
    }

    return playerColor;
}