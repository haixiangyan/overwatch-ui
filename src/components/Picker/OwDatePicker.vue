<template>
    <div class="ow-date-picker">
        <ow-popover position="bottom">
            <ow-input :readonly="true"></ow-input>
            <template slot="content">
                <div class="ow-date-picker-popover">
                    <div class="ow-date-picker-popover-header">
                        <ow-icon color="white" name="fast-left"></ow-icon>
                        <ow-icon color="white" name="left"></ow-icon>
                        <span @click="onClickYear">2018</span>
                        <span @click="onClickMonth">February</span>
                        <ow-icon color="white" name="right"></ow-icon>
                        <ow-icon color="white" name="fast-right"></ow-icon>
                    </div>
                    <div class="ow-date-picker-popover-content">
                        <div v-if="mode === 'year'" class="ow-date-picker-popover-content-item">
                            Years
                        </div>
                        <div v-else-if="mode === 'month'" class="ow-date-picker-panel-content-item">
                            Months
                        </div>
                        <div v-else class="">
                            <div class="ow-date-picker-popover-content-weekdays">
                                <span v-for="weekday in weekdays">{{weekday}}</span>
                            </div>
                            <div class="ow-date-picker-popover-content-week" v-for="week in 6">
                                <span class="ow-date-picker-popover-content-day" v-for="day in 7">
                                    {{dates[(week - 1) * 7 + (day - 1)].getDate()}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="ow-date-picker-popover-footer">
                    </div>
                </div>
            </template>
        </ow-popover>
    </div>
</template>k

<script>
    import OwIcon from '../Icon/OwIcon'
    import OwInput from '../Input/OwInput'
    import OwPopover from '../Popover/OwPopover'
    import DateUtils from './utils'

    export default {
        name: "OwDatePicker",
        data() {
            return {
                isPanelVisible: true,
                mode: 'day',
                value: new Date(),
                weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
            }
        },
        computed: {
            dates() {
                let dateObj = new Date()
                const {year, month} = DateUtils.getDateInfo(dateObj)

                let firstDateObj = DateUtils.firstDayOfMonth(dateObj)
                let lastDateObj = DateUtils.lastDayOfMonth(dateObj)

                let currentDates = []
                for (let i = firstDateObj.getDate(); i <= lastDateObj.getDate(); i++) {
                    currentDates.push(new Date(year, month, i))
                }

                let prevDates = []
                let prevDatesNum = firstDateObj.getDay() === 0 ? 6 : firstDateObj.getDay() - 1
                for (let i = 0; i < prevDatesNum; i++) {
                    prevDates.unshift(new Date(year, month, -i))
                }

                let nextDates = []
                let nextDatesNum = 42 - prevDates.length - currentDates.length
                for (let i = 1; i <= nextDatesNum; i++) {
                    nextDates.push(new Date(year, month + 1, i))
                }

                return [...prevDates, ...currentDates, ...nextDates]
            }
        },
        methods: {
            onClickYear() {
                this.mode = 'year'
            },
            onClickMonth() {
                this.mode = 'month'
            }
        },
        components: {
            OwIcon,
            OwInput,
            OwPopover
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
.ow-date-picker {
    display: inline-flex;
    border: 1px solid red;
}
</style>