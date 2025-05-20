import { useState } from "react"
import { Main } from "@/components/layout/main";
import { useTranslation } from 'react-i18next';
import { TasksPrimaryButtons } from './components/tasks-primary-buttons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import TasksProvider from './context/tasks-context'
import { tasks } from './config/tasks'


export default function Tasks() {
    const { t } = useTranslation();
    const [view, setView] = useState('table')

    return (
        <TasksProvider>
            <Main>
                <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>{t("tasks")}</h2>
                        <p className='text-muted-foreground'>
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                    <TasksPrimaryButtons />
                </div>

                <Tabs
                    defaultValue={view}
                    onValueChange={setView}
                    orientation='vertical'
                    className='space-y-4'
                >
                    <div className='w-full overflow-x-auto pb-2'>
                        <TabsList>
                            <TabsTrigger value='table'>表格视图</TabsTrigger>
                            <TabsTrigger value='kanban'>
                                看板试图
                            </TabsTrigger>
                            <TabsTrigger value='calendar'>
                                日历视图
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="table" className="mt-0">
                        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                            <DataTable data={tasks} columns={columns} />
                        </div>
                    </TabsContent>
                    <TabsContent value="kanban" className="mt-0">
                        knaban
                    </TabsContent>
                    <TabsContent value="calendar" className="mt-0 h-full pb-4">
                        calendar
                    </TabsContent>
                </Tabs>



            </Main>

            {/* <TasksDialogs /> */}
        </TasksProvider>
    )
}