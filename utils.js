// all utility/helper functions

const get_90_daysDates = () => {
    const date = new Date();
    const year = `${date.getFullYear()}`;
    const day = ("0" + `${date.getDay()}`).slice(-2);
    const month = ("0" + `${date.getMonth() + 1}`).slice(-2);

    const today = `${year}-${month}-${day}`;

    const pastDate = new Date(date - 1000 * 60 * 60 * 24 * 90);
    const pastYear = `${pastDate.getFullYear()}`;
    const pastDay = ("0" + `${pastDate.getDay()}`).slice(-2);
    const pastMonth = ("0" + `${pastDate.getMonth() + 1}`).slice(-2);

    const _90_days_ago = `${pastYear}-${pastMonth}-${pastDay}`;

    return [`${today}`, `${_90_days_ago}`];
};

module.exports = {
    get_90_daysDates,
};
