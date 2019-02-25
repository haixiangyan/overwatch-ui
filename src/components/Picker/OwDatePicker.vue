<template>
    <div class="ow-date-picker">
        <ow-popover position="bottom">
            <ow-input :value="formattedValue" @input="onInput"></ow-input>
            <template slot="content">
                <div class="ow-date-picker-popover">
                    <div class="ow-date-picker-popover-header">
                        <span class="ow-date-picker-popover-header-action" @click="onClickPrevYear">
                            <ow-icon color="white" name="fast-left"></ow-icon>
                        </span>
                        <span class="ow-date-picker-popover-header-action">
                            <ow-icon color="white" name="left" @click="onClickPrevMonth"></ow-icon>
                        </span>
                        <span @click="pickYearMonth" class="ow-date-picker-popover-header-year-month">
                            <span>{{display.year}}</span>
                            -
                            <span>{{months[display.month]}}</span>
                        </span>
                        <span class="ow-date-picker-popover-header-action" @click="onClickNextMonth">
                            <ow-icon color="white" name="right"></ow-icon>
                        </span>
                        <span class="ow-date-picker-popover-header-action" @click="onClickNextYear">
                            <ow-icon color="white" name="fast-right"></ow-icon>
                        </span>
                    </div>
                    <div class="ow-date-picker-popover-content">
                        <div v-if="isShowDays">
                            <div class="ow-date-picker-popover-content-weekdays">
                                <span :key="weekday" v-for="weekday in weekdays">{{weekday}}</span>
                            </div>
                            <div class="ow-date-picker-popover-content-week" v-for="week in 6" :key="week">
                                <span
                                    @click="onClickCell(getDateObj(week, day))"
                                    :class="getDateClasses(getDateObj(week, day))"
                                    v-for="day in 7"
                                    :key="day">
                                    {{getDateObj(week, day).getDate()}}
                                </span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="ow-date-picker-popover-content-selector">
                                <select @change="onSelectYear" :value="display.year">
                                    <option v-for="year in years" :key="year" :value="year">{{year}}</option>
                                </select>
                                <select @change="onSelectMonth" :value="display.month">
                                    <option v-for="(month, index) in months" :key="month" :value="index">{{month}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="ow-date-picker-popover-footer">
                    </div>
                </div>
            </template>
        </ow-popover>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'
    import OwInput from '../Input/OwInput'
    import OwPopover from '../Popover/OwPopover'
    import DateUtils from './utils'

    export default {
        name: "OwDatePicker",
        props: {
            value: {
                type: Date,
                default: new Date()
            },
            range: {
                type: Array,
                default: () => [new Date(1900, 1, 1), DateUtils.addYear(new Date(), 100)]
            }
        },
        data() {
            const {year, month} = DateUtils.getDateInfo(this.value)
            return {
                isPanelVisible: true,
                isShowDays: false,
                weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                months: ['Jan', 'Feb', 'Mar', 'Ari', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                display: { year, month }
            }
        },
        computed: {
            dates() {
                let dateObj = new Date(this.display.year, this.display.month, 1)
                let firstDateObj = DateUtils.firstDayOfMonth(dateObj)
                let prevFirstDayMs = DateUtils.getFirstDateMs(firstDateObj)

                let datesObj = []
                for (let i = 0; i < 42; i++) {
                    datesObj.push(new Date(DateUtils.addDayInMs(prevFirstDayMs, i)))
                }

                return datesObj
            },
            formattedValue() {
                let {year, month, date} = DateUtils.getDateInfo(this.value)
                month = month + 1
                if (month < 10) {
                    month = '0' + month
                }
                if (date < 10) {
                    date = '0' + date
                }
                return `${month}-${date}-${year}`
            },
            years() {
                const startYear = this.range[0].getFullYear()
                const endYear = this.range[1].getFullYear()
                let years = []
                for (let year = startYear; year <= endYear; year++) {
                    years.push(year)
                }
                return years
            },
        },
        methods: {
            getDateClasses(dateObj) {
                const {year, month, date} = DateUtils.getDateInfo(this.value)
                return [
                    'ow-date-picker-popover-content-day',
                    { 'current-month': this.isCurrentMonth(dateObj) },
                    { 'active': dateObj.getFullYear() === year && dateObj.getMonth() === month && dateObj.getDate() === date}
                ]
            },
            isCurrentMonth(dateObj) {
                const {year, month} = DateUtils.getDateInfo(dateObj)
                return this.display.year === year && this.display.month === month
            },
            pickYearMonth() {
                this.isShowDays = !this.isShowDays
            },
            onClickCell(dateObj) {
                if (this.isCurrentMonth(dateObj)) {
                    this.$emit('input', dateObj)
                }
            },
            getDateObj(week, day) {
                return this.dates[(week - 1) * 7 + (day - 1)]
            },
            onInput(value) {
                const regex = /^\d{1,2}-\d{1,2}-\d{4}$/g
                if (value.match(regex)) {
                    let [year, month, date] = value.split('-')
                    month = month - 1
                    console.log(new Date(year, month, date))
                    this.$emit('input', new Date(year, month, date))
                }
                else {
                    console.log('no')
                }
            },
            onClickPrevYear() {
                const oldDateObj = new Date(this.display.year, this.display.month)
                const newDateObj = DateUtils.addYear(oldDateObj, -1)
                const {year, month} = DateUtils.getDateInfo(newDateObj)
                this.display = {year, month}
            },
            onClickPrevMonth() {
                const oldDateObj = new Date(this.display.year, this.display.month)
                const newDateObj = DateUtils.addMonth(oldDateObj, -1)
                const {year, month} = DateUtils.getDateInfo(newDateObj)
                this.display = {year, month}
            },
            onClickNextMonth() {
                const oldDateObj = new Date(this.display.year, this.display.month)
                const newDateObj = DateUtils.addMonth(oldDateObj, 1)
                const {year, month} = DateUtils.getDateInfo(newDateObj)
                this.display = {year, month}
            },
            onClickNextYear() {
                const oldDateObj = new Date(this.display.year, this.display.month)
                const newDateObj = DateUtils.addYear(oldDateObj, 1)
                const {year, month} = DateUtils.getDateInfo(newDateObj)
                this.display = {year, month}
            },
            onSelectYear(event) {
                const year = event.target.value - 0
                const selectingDateObj = new Date(year, this.display.month)
                if (this.range[0] <= selectingDateObj && selectingDateObj <= this.range[1]) {
                    console.log('yes')
                    this.display.year = parseInt(year)
                }
                else {
                    event.target.value = this.display.year
                    alert('Error')
                }
            },
            onSelectMonth(event) {
                const month = event.target.value - 0
                const selectingDateObj = new Date(this.display.year, month)
                if (this.range[0] <= selectingDateObj && selectingDateObj <= this.range[1]) {
                    console.log('yes')
                    this.display.month = parseInt(month)
                }
                else {
                    event.target.value = this.display.month
                    alert('Error')
                }
            }
        },
        components: {
            OwIcon,
            OwInput,
            OwPopover
        },
    }
</script>

<style scoped lang="scss">
.ow-date-picker {
    display: inline-flex;
    border: 1px solid red;
    &-popover {
        user-select: none;
        width: 220px;
        &-header {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            &-year-month {
                margin: 0 auto;
            }
            &-action {
                width: 1.75em;
                height: 1.75em;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
                border-radius: $--border-radius-circle;
                transition: all .5s;
                &:hover {
                    background: $--color-primary;
                }
            }
        }
        &-content {
            &-day, &-weekdays > span {
                width: 1.75em;
                height: 1.75em;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
                border-radius: $--border-radius-small;
            }
            &-weekdays, &-week {
                display: flex;
                justify-content: space-between;
            }
            &-day {
                transition: all .5s;
                color: $--color-text-placeholder;
                &.current-month {
                    color: $--color-white;
                }
                &.active {
                    background: $--color-primary;
                }
                &:hover {
                    background: $--color-primary;
                }
            }
            &-selector {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}
</style>