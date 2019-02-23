<template>
    <div class="ow-date-picker">
        <ow-popover position="bottom">
            <ow-input :value="formattedValue" @input="onInput"></ow-input>
            <template slot="content">
                <div class="ow-date-picker-popover">
                    <div class="ow-date-picker-popover-header">
                        <span class="ow-date-picker-popover-header-action">
                            <ow-icon color="white" name="fast-left"></ow-icon>
                        </span>
                        <span class="ow-date-picker-popover-header-action">
                            <ow-icon color="white" name="left"></ow-icon>
                        </span>
                        <span @click="pickYearMonth" class="ow-date-picker-popover-header-year-month">
                            <span>2018</span>
                            -
                            <span>November</span>
                        </span>
                        <span class="ow-date-picker-popover-header-action">
                            <ow-icon color="white" name="right"></ow-icon>
                        </span>
                        <span class="ow-date-picker-popover-header-action">
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
                            <div class="ow-date-picker-panel-content-selector">
                                <select @change="onSelectYear">
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                    <option value="2005">2005</option>
                                    <option value="2006">2006</option>
                                    <option value="2007">2007</option>
                                    <option value="2008">2008</option>
                                    <option value="2009">2009</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                </select>
                                <select @change="onSelectMonth">
                                    <option value="0">Jan</option>
                                    <option value="1">Feb</option>
                                    <option value="2">Mar</option>
                                    <option value="3">Apr</option>
                                    <option value="4">May</option>
                                    <option value="5">Jun</option>
                                    <option value="6">Jul</option>
                                    <option value="7">Aug</option>
                                    <option value="8">Sep</option>
                                    <option value="9">Oct</option>
                                    <option value="10">Nov</option>
                                    <option value="11">Dec</option>
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
            }
        },
        data() {
            return {
                isPanelVisible: true,
                isShowDays: true,
                weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
            }
        },
        computed: {
            dates() {
                let dateObj = new Date()
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
            }
        },
        methods: {
            getDateClasses(dateObj) {
                const {year, month, date} = DateUtils.getDateInfo(this.value)
                return [
                    'ow-date-picker-popover-content-day',
                    { 'current-month': dateObj.getMonth() !== month },
                    { 'active': dateObj.getFullYear() === year && dateObj.getMonth() === month && dateObj.getDate() === date}
                ]
            },
            pickYearMonth() {
                this.isShowDays = !this.isShowDays
            },
            onClickCell(dateObj) {
                this.$emit('input', dateObj)
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
            onSelectYear(event) {

            },
            onSelectMonth(event) {

            }
        },
        components: {
            OwIcon,
            OwInput,
            OwPopover
        }
    }
</script>

<style scoped lang="scss">
.ow-date-picker {
    display: inline-flex;
    border: 1px solid red;
    &-popover {
        user-select: none;
        width: 240px;
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
                &.current-month {
                    color: $--color-text-secondary;
                }
                &.active {
                    background: $--color-primary;
                }
                &:hover {
                    background: $--color-primary;
                }
            }
        }
    }
}
</style>