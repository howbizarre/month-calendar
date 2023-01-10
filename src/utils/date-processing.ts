export type WeekFirstDay = "monday" | "sunday";

export const weekDays = {
    "firstDay": {
        "0": "sunday",
        "1": "monday",
    },
    "sunday": {
        "short": ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        "long": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    "monday": {
        "short": ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        "long": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
};
