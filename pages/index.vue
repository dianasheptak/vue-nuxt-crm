<template>
    <div class="p-10">
        <h1 class="font-bold text-2xl mb-10">
            {{ $t('CRM.title') }}
        </h1>
      <div v-if="isLoading">
        Loading...
      </div>
      <div v-else>
        <div class="grid grid-cols-5 gap-16">
            <div v-for="(column, idx) in data" @dragover="handleDragOver" @drop="() => handleDrop(column)" class="min-h-screen">
                <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center" :style="generateColumnStyle(idx, data?.length)">
                  {{column.name}}
                </div>
              <div>
                <CreateDeal :refetch="refetch" :status="column.id"/>
                <UiCard
                    v-for="card in column.items"
                    :key="card.id"
                    class="my-5"
                    draggable="true"
                    @dragstart="() => handleDragStart(card, column)"
                >
                    <UiCardHeader role="button" @click="store.set(card)">
                        <UiCardTitle>{{ card.name }}</UiCardTitle>
                        <UiCardDescription class="mt-2 block">
                          {{ convertCurrency(card.price) }}
                        </UiCardDescription>
                    </UiCardHeader>

                      <UiCardContent class="text-xs">
                        <span>Компанiя</span>
                        {{ card.companyName }}
                      </UiCardContent
                      >
                    <UiCardFooter class="text-sm">
                      {{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}
                    </UiCardFooter>
                </UiCard>
              </div>
            </div>
        </div>

        <KanbanSlideover/>
      </div>
    </div>
</template>

<script lang="ts" setup>
import type { ICard, IColumn } from '~/components/kanban/kanban.types'
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
import dayjs from 'dayjs'
import CreateDeal from "~/components/kanban/createDeal.vue";
import {useMutation} from "@tanstack/vue-query";
import {COLLECTION_DEALS, DB_ID} from "~/app.constants";
import type { EnumStatus } from '~/types/deals.types'
import {generateColumnStyle} from "~/components/kanban/generate-gradient";
import { useDealSlideStore } from '~/store/deal-slide-store'

type TypeMutationVariables = {
  docId: string
  status?: EnumStatus
}

const store = useDealSlideStore()
const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

const { data, isLoading, refetch } = useKanbanQuery()

const { mutate } = useMutation({
  mutationKey: ['move card'],
  mutationFn: ({ docId, status }: TypeMutationVariables) =>
      DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
        status,
      }),
  onSuccess: () => {
    refetch()
  },
})

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card
  sourceColumnRef.value = column
}

function handleDragOver(event: DragEvent) {
  event.preventDefault()
}

function handleDrop(targetColumn: IColumn) {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({ docId: dragCardRef.value.id, status: targetColumn.id })
  }
}

useHead({
  title: 'CRM System'
})



</script>

<style lang="scss" scoped>

</style>
